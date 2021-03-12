---
layout: page
manifest: "/img/derivatives/iiif/obj12/manifest.json"
---
<script src="{{ '/assets/openseadragon/openseadragon.min.js' | absolute_url }}"></script>
<style>.image-viewer{background-color:grey;height:500px;width:100%}</style>

# With Thumbnails but not Tiles

- [manifest.json]({{ page.manifest | absolute_url }})
- [js source]({{ 'src/osd-2.js' | absolute_url }})


<div id="osd-2" class="image-viewer"></div>
<script src="{{ 'src/osd-2.js' | absolute_url }}"></script>
