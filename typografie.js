(function () {
  'use strict';

  // Česká typografie: spojky a předložky nemají zůstávat samotné na konci řádku.
  // Mezeru za nimi proto převádíme na nezalomitelnou mezeru.
  const words = [
    'a','i','ani','ale','nebo','či','že','aby','když','pokud','protože',
    'k','ke','ku','s','se','z','ze','v','ve','o','u','do','od','po','na','za',
    'pro','bez','pod','nad','před','přes','při','mezi'
  ];
  const escaped = words
    .sort((a, b) => b.length - a.length)
    .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp("(^|[\\s([{„“”\"'])(" + escaped.join('|') + ")[ \\t\\r\\n]+(?=\\S)", 'giu');
  const skipTags = new Set(['SCRIPT','STYLE','TEXTAREA','INPUT','SELECT','OPTION','PRE','CODE','NOSCRIPT']);
  const attrs = ['placeholder', 'title', 'aria-label'];

  function fix(value) {
    return value.replace(re, '$1$2\u00A0');
  }

  function fixTextNode(node) {
    const parent = node.parentElement;
    if (!parent || skipTags.has(parent.tagName)) return;
    const before = node.nodeValue;
    const after = fix(before);
    if (after !== before) node.nodeValue = after;
  }

  function fixAttributes(el) {
    if (!(el instanceof Element) || skipTags.has(el.tagName)) return;
    attrs.forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      const before = el.getAttribute(attr);
      const after = fix(before);
      if (after !== before) el.setAttribute(attr, after);
    });
  }

  function process(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      fixTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;

    if (root.nodeType === Node.ELEMENT_NODE) fixAttributes(root);
    if (root.querySelectorAll) root.querySelectorAll('*').forEach(fixAttributes);

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) fixTextNode(node);
  }

  function start() {
    process(document.body);
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') {
          fixTextNode(mutation.target);
        } else {
          mutation.addedNodes.forEach(process);
        }
      }
    });
    observer.observe(document.body, {subtree:true, childList:true, characterData:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
