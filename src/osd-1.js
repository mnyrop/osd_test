---
layout: none
---
$(document).ready(function () {
  var manifestUrl = "{{ '/img/derivatives/iiif/obj12/manifest.json' | absolute_url }}";
  $.getJSON(manifestUrl, function(data) {
    var tileSources1 = [];
    $.each(data.sequences[0].canvases, function(_k, val) {
      tileSources1.push(val.images[0].resource.service['@id'] + '/info.json');
    });
    OpenSeadragon({
      id: "osd-1",
      sequenceMode: true,
      prefixUrl: "{{ '/assets/openseadragon/images/' | absolute_url }}",
      tileSources: tileSources1,
      useCanvas: true,
      preload: true,
      showReferenceStrip: true
    });
  });
});
