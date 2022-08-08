---
tags:
- javacript
- cloudflare
show_comment: true
title: How to Redirect Cloudflare Pages Domain to Custom Domain
description: Complete Tutorial How to Redirect Cloudflare Pages Domain to Custom Domain
date: 2022-08-07T00:00:00+07:00
lastmod: 
slug: redirect-cloudflare-pages-domain-to-custom-domain
images:
- https://cdn.statically.io/og/How%20to%20Redirect%20Cloudflare%20Pages%20Domain%20to%20Custom%20Domain.jpg

---
Hello folks,

You should know that until now, when this article was written, Cloudflare pages did not support redirecting the default domain to a custom domain that we have via the HTTP header. Hence, we have to overcome it by using JavaScript to redirect.

The following is the JavaScript code to redirect a domain to a domain without a dynamic relative path.

```javascript
if (window.location.hostname !== "aliif.space"){
    window.top.location.href = 'https://aliif.space';
}
```

And below is the JavaScript code to redirect the domain to the domain with a dynamic relative path.

```javascript
if (window.location.hostname !== "aliif.space"){
   	window.top.location.href = 'https://aliif.space' + window.location.pathname;
}
```

Replace the aliif.space domain with your custom domain, then wrap one of the scripts with `<script></script>` tags and place them before the closing `</head>` tag on your web page.

Thank you for reading. If there are errors or questions, don't hesitate to leave a comment.