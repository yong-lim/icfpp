---
layout: default
title: 'glight test'
permalink: /glight
imgfolder: assets/images/2025-home-group
images:
  - name: hg-wed-1.jpeg
    thumb: hg-wed-1-thumb.jpeg
    text: "HG Wed. 1"
  - name: hg-wed-2.jpeg
    thumb: hg-wed-2-thumb.jpeg
    text: "HG Wed. 2"
---

<!-- Gallery -->
{%- for img in page.images -%}
<a
    href="{{ page.imgfolder }}/{{ img.name }}"
    class="glightbox"
    data-gallery="hg" >
    <img src="{{ page.imgfolder }}/{{ img.thumb }}" alt="image" />
</a>
{%- endfor -%}

<script type="text/javascript" src="assets/js/glightbox.min.js"></script>
<script type="text/javascript">
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
    });
</script>

