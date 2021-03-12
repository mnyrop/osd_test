---
layout: none
---
$(document).ready(function () {
  var manifestUrl = "{{ '/img/derivatives/iiif/obj12/manifest.json' | absolute_url }}";
  $.getJSON(manifestUrl, function(data) {
    var tileSources2 = [];
    $.each(data.sequences[0].canvases, function(_k, val) {
      tileSources2.push({
        url: val.images[0].resource.service['@id'] + '/info.json',
        referenceStripThumbnailUrl: val.thumbnail
      });
    });
    OpenSeadragon({
      id: "osd-2",
      sequenceMode: true,
      prefixUrl: "{{ '/assets/openseadragon/images/' | absolute_url }}",
      tileSources: tileSources2,
      useCanvas: true,
      preload: true,
      showReferenceStrip: true
    });
  });
});
