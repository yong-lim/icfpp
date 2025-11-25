---
layout: default
title: 'turnstile test'
permalink: /turnstile
---

<form action="/contact" method="POST" id="contact-form">
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required></textarea>
  <!-- Widget with callbacks and custom configuration -->
    <!-- data-sitekey="2x00000000000000000000AB" -->
    <!-- data-sitekey="1x00000000000000000000AA" -->
  <div
    class="cf-turnstile"
    data-sitekey="0x4AAAAAACBSiZE2rUJH20hh"
    data-theme="light"
    data-size="flexible"
    data-callback="onTurnstileSuccess"
    data-error-callback="onTurnstileError"
    data-expired-callback="onTurnstileExpired"
  ></div>
  <button type="submit" id="submit-btn" disabled>Send Message</button>
</form>

<script>
  function onTurnstileSuccess(token) {
    console.log("Turnstile success:", token);
    document.getElementById("submit-btn").disabled = false;
  }
  function onTurnstileError(errorCode) {
    console.error("Turnstile error:", errorCode);
    document.getElementById("submit-btn").disabled = true;
  }
  function onTurnstileExpired() {
    console.warn("Turnstile token expired");
    document.getElementById("submit-btn").disabled = true;
  }
</script>

