---
title: {{ title }}
date: {{ date }}
tag:
pid:
path: "./js/"
---


<!-- p5.js‚Ì’Ç‰Á -->
<% if(page.js === true) { %>
    <div id="canvas"></div>
    <script language="javascript" type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.6/p5.min.js"></script>
    <script src="/<%= page.path %>script.js"></script>
<% } %>

