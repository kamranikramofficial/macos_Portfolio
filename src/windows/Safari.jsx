import React, { useEffect, useMemo, useRef, useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {
  PanelLeft,
  ShieldHalf,
  ChevronLeft,
  ChevronRight,
  Search,
  Copy,
  Share,
  Plus,
  MoveRight
} from "lucide-react";
import { blogPosts } from "#constants";

const Safari = () => {
  const [query, setQuery] = useState("");
  const [secureMode, setSecureMode] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(blogPosts[0]?.id ?? null);
  const [status, setStatus] = useState("");
  const searchInputRef = useRef(null);

  const visiblePosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesQuery =
        !normalized ||
        `${post.title} ${post.date}`.toLowerCase().includes(normalized);
      const matchesSecure = !secureMode || post.link.startsWith("https://");
      return matchesQuery && matchesSecure;
    });
  }, [query, secureMode]);

  useEffect(() => {
    if (!visiblePosts.length) {
      setSelectedPostId(null);
      return;
    }

    const hasSelected = visiblePosts.some((post) => post.id === selectedPostId);
    if (!hasSelected) setSelectedPostId(visiblePosts[0].id);
  }, [selectedPostId, visiblePosts]);

  const selectedIndex = visiblePosts.findIndex((post) => post.id === selectedPostId);
  const selectedPost = selectedIndex >= 0 ? visiblePosts[selectedIndex] : null;
  const canGoBack = selectedIndex > 0;
  const canGoForward = selectedIndex >= 0 && selectedIndex < visiblePosts.length - 1;

  const setTemporaryStatus = (message) => {
    setStatus(message);
    window.clearTimeout(window.__safariStatusTimer);
    window.__safariStatusTimer = window.setTimeout(() => setStatus(""), 1600);
  };

  const openSelectedPost = () => {
    if (!selectedPost?.link) return;
    window.open(selectedPost.link, "_blank", "noopener,noreferrer");
  };

  const copySelectedLink = async () => {
    if (!selectedPost?.link) return;
    try {
      await navigator.clipboard.writeText(selectedPost.link);
      setTemporaryStatus("Link copied.");
    } catch {
      setTemporaryStatus("Copy failed.");
    }
  };

  const shareSelectedLink = async () => {
    if (!selectedPost?.link) return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: selectedPost.title,
          text: selectedPost.title,
          url: selectedPost.link,
        });
        setTemporaryStatus("Shared.");
        return;
      }
      await copySelectedLink();
    } catch {
      setTemporaryStatus("Share cancelled.");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!visiblePosts.length) {
      setTemporaryStatus("No matching article.");
      return;
    }
    setSelectedPostId(visiblePosts[0].id);
    setTemporaryStatus("Jumped to first match.");
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <button
          type="button"
          className={`ml-10 icon ${compactMode ? "text-blue-600 bg-blue-100" : ""}`}
          onClick={() => setCompactMode((prev) => !prev)}
          aria-label="Toggle compact list"
        >
          <PanelLeft className="size-5" />
        </button>

        <div className="flex items-center gap-1 ml-5">
          <button
            type="button"
            className="icon"
            onClick={() => canGoBack && setSelectedPostId(visiblePosts[selectedIndex - 1].id)}
            disabled={!canGoBack}
            aria-label="Previous article"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            className="icon"
            onClick={() =>
              canGoForward && setSelectedPostId(visiblePosts[selectedIndex + 1].id)
            }
            disabled={!canGoForward}
            aria-label="Next article"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="flex-1 flex-center gap-3">
          <button
            type="button"
            className={`icon ${secureMode ? "text-blue-600 bg-blue-100" : ""}`}
            onClick={() => setSecureMode((prev) => !prev)}
            aria-label="Toggle secure mode"
          >
            <ShieldHalf className="size-5" />
          </button>

          <form className="search" onSubmit={handleSearchSubmit}>
            <button
              type="submit"
              className="icon"
              aria-label="Search"
              onClick={() => searchInputRef.current?.focus()}
            >
              <Search className="size-4" />
            </button>
            <input
              type="text"
              ref={searchInputRef}
              placeholder="Search or enter website name"
              className="flex-1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="flex items-center gap-5">
          <button type="button" className="icon" onClick={shareSelectedLink} aria-label="Share link">
            <Share className="size-5" />
          </button>
          <button type="button" className="icon" onClick={openSelectedPost} aria-label="Open link">
            <Plus className="size-5" />
          </button>
          <button type="button" className="icon" onClick={copySelectedLink} aria-label="Copy link">
            <Copy className="size-5" />
          </button>
        </div>
      </div>

      <div className="window-body">
      <div className={`blog ${compactMode ? "blog-compact" : ""}`}>
         <h2>MY Developer Blog</h2>

         {status && <p className="toolbar-status">{status}</p>}

         <div className="space-y-8">
           {visiblePosts.map(({id , image , title , date , link }) => (
             <div
               key={id}
               className={`blog-post ${selectedPostId === id ? "blog-post-active" : ""}`}
               onClick={() => setSelectedPostId(id)}
             >
              <div className="col-span-2">
               <img src={image} alt={title} />
              </div>

              <div className="content">
                 <p>{date}</p>
                  <h3>{title}</h3>
                  <a href={link} target="_blank" rel="noopener noreferrer">Check out the full post <MoveRight className="icon-hover"/></a>
              </div>
             </div>
           ))}

           {!visiblePosts.length && (
            <p className="text-sm text-gray-500">No matching article.</p>
           )}
         </div>
      </div>
      </div>
    </>
  );
};
const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
