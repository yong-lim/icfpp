---
layout: icf
title: "Home Group"
permalink: /home-group
page-banner: /assets/images/lunch-1.jpg

imgfolder: assets/images/2025-home-group
images:
  - name: hg-thu-1.jpg
    thumb: hg-thu-1-thumb.jpg
    alt: "Thur. Night 1"
  - name: hg-thu-2.jpg
    thumb: hg-thu-2-thumb.jpg
    alt: "Thur. Night 2"
  - name: hg-wed-1.jpeg
    thumb: hg-wed-1-thumb.jpeg
    alt: "HG Wed. 1"
  - name: hg-wed-2.jpeg
    thumb: hg-wed-2-thumb.jpeg
    alt: "HG Wed. 2"
  - name: hg-women-1.jpeg
    thumb: hg-women-1-thumb.jpeg
    alt: "Women HG 1"
  - name: hg-women-2.jpeg
    thumb: hg-women-2-thumb.jpeg
    alt: "Women HG 2"
---
## Home Groups

Want to try hosting, leading or attending a Home Group? Our Home Group Kickstart is starting soon! This is a 4-week initiative with the option to continue longer term. Study materials will be provided! Home Groups are a life-giving part of community and this is the time to prayerfully consider participating.

If you are interested in being part of a Home Group and/or leading or hosting one please contact us for more information.

<div style="padding: 15px 0 30px;"> 
  <hr>
</div>

{%- include contact.html -%}

<div style="padding: 35px 0 20px;"> 
  <hr>
</div>
### Some Home Group Photos
<!-- Gallery -->
{%- for img in page.images -%}
<a
  href="{{ page.imgfolder }}/{{ img.name }}"
  class="glightbox"
  data-gallery="hg" >
  <img src="{{ page.imgfolder }}/{{ img.thumb }}" alt="{{ img.alt }}" />
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

