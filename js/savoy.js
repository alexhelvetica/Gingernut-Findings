var savoyMap = L.map(
  "savoyMap",
  {
    center: [0.0, 0.0],
    crs: L.CRS.EPSG3857,
    zoom: 1,
    zoomControl: true,
    preferCanvas: false,
  }
);

var tile_layer_5521a6bc085de9a31049d3442491888c = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '\u0026copy; \u003ca href="https://www.openstreetmap.org/copyright"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca href="https://carto.com/attributions"\u003eCARTO\u003c/a\u003e',
    detectRetina: false,
    maxNativeZoom: 20,
    maxZoom: 20,
    minZoom: 0,
    noWrap: false,
    opacity: 1,
    subdomains: "abcd",
    tms: false,
  }
);

tile_layer_5521a6bc085de9a31049d3442491888c.addTo(
  savoyMap
);

function geo_json_5b1621fa644a152f9c8eef7173935403_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_5b1621fa644a152f9c8eef7173935403_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_5b1621fa644a152f9c8eef7173935403_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg viewBox="-2 -2 104 104" height="20" width="20" class="vic-svg" xmlns="http://www.w3.org/2000/svg"\u003e\u003cpath d="M50 0A50 50,0,0,0,0 50L50 50Z" fill="#1b9e77"/\u003e\u003ccircle r="50" cx="50" cy="50" fill="none" stroke="black" stroke-width="4px" stroke-opacity="0.3" /\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_5b1621fa644a152f9c8eef7173935403_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_5b1621fa644a152f9c8eef7173935403_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_5b1621fa644a152f9c8eef7173935403.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_5b1621fa644a152f9c8eef7173935403_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_5b1621fa644a152f9c8eef7173935403 = L.geoJson(null, {
  onEachFeature: geo_json_5b1621fa644a152f9c8eef7173935403_onEachFeature,

  style: geo_json_5b1621fa644a152f9c8eef7173935403_styler,
  pointToLayer: geo_json_5b1621fa644a152f9c8eef7173935403_pointToLayer,
});

function geo_json_5b1621fa644a152f9c8eef7173935403_add(data) {
  geo_json_5b1621fa644a152f9c8eef7173935403.addData(data);
}
fetch("./json/sj-s-o.json")
  .then((response) => response.json())
  .then((json) => geo_json_5b1621fa644a152f9c8eef7173935403_add(json));

geo_json_5b1621fa644a152f9c8eef7173935403.bindTooltip(
  function (layer) {
    let div = L.DomUtil.create("div");

    let handleObject = (feature) =>
      typeof feature == "object" ? JSON.stringify(feature) : feature;
    let fields = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let table =
      "<table>" +
      String(
        fields
          .map(
            (v, i) =>
              `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`
          )
          .join("")
      ) +
      "</table>";
    div.innerHTML = table;

    return div;
  },
  { className: "foliumtooltip", sticky: true }
);

geo_json_5b1621fa644a152f9c8eef7173935403.addTo(
  savoyMap
);

function geo_json_c4c686993710db7d071126e9864e8c74_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_c4c686993710db7d071126e9864e8c74_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_c4c686993710db7d071126e9864e8c74_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg height="20" width="20"\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_c4c686993710db7d071126e9864e8c74_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_c4c686993710db7d071126e9864e8c74_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_c4c686993710db7d071126e9864e8c74.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_c4c686993710db7d071126e9864e8c74_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_c4c686993710db7d071126e9864e8c74 = L.geoJson(null, {
  onEachFeature: geo_json_c4c686993710db7d071126e9864e8c74_onEachFeature,

  style: geo_json_c4c686993710db7d071126e9864e8c74_styler,
  pointToLayer: geo_json_c4c686993710db7d071126e9864e8c74_pointToLayer,
});

function geo_json_c4c686993710db7d071126e9864e8c74_add(data) {
  geo_json_c4c686993710db7d071126e9864e8c74.addData(data);
}
fetch("./json/sj-s-gf.json")
  .then((response) => response.json())
  .then((json) => geo_json_c4c686993710db7d071126e9864e8c74_add(json));

geo_json_c4c686993710db7d071126e9864e8c74.bindTooltip(
  function (layer) {
    let div = L.DomUtil.create("div");

    let handleObject = (feature) =>
      typeof feature == "object" ? JSON.stringify(feature) : feature;
    let fields = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let table =
      "<table>" +
      String(
        fields
          .map(
            (v, i) =>
              `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`
          )
          .join("")
      ) +
      "</table>";
    div.innerHTML = table;

    return div;
  },
  { className: "foliumtooltip", sticky: true }
);

geo_json_c4c686993710db7d071126e9864e8c74.addTo(
  savoyMap
);

function geo_json_c24443dad5471729dce5d1d8b2eb3c1b_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_c24443dad5471729dce5d1d8b2eb3c1b_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_c24443dad5471729dce5d1d8b2eb3c1b_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg height="20" width="20"\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_c24443dad5471729dce5d1d8b2eb3c1b_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_c24443dad5471729dce5d1d8b2eb3c1b_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_c24443dad5471729dce5d1d8b2eb3c1b.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_c24443dad5471729dce5d1d8b2eb3c1b_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_c24443dad5471729dce5d1d8b2eb3c1b = L.geoJson(null, {
  onEachFeature: geo_json_c24443dad5471729dce5d1d8b2eb3c1b_onEachFeature,

  style: geo_json_c24443dad5471729dce5d1d8b2eb3c1b_styler,
  pointToLayer: geo_json_c24443dad5471729dce5d1d8b2eb3c1b_pointToLayer,
});

function geo_json_c24443dad5471729dce5d1d8b2eb3c1b_add(data) {
  geo_json_c24443dad5471729dce5d1d8b2eb3c1b.addData(data);
}
fetch("./json/sj-s-cp.json")
  .then((response) => response.json())
  .then((json) => geo_json_c24443dad5471729dce5d1d8b2eb3c1b_add(json));

geo_json_c24443dad5471729dce5d1d8b2eb3c1b.bindTooltip(
  function (layer) {
    let div = L.DomUtil.create("div");

    let handleObject = (feature) =>
      typeof feature == "object" ? JSON.stringify(feature) : feature;
    let fields = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let table =
      "<table>" +
      String(
        fields
          .map(
            (v, i) =>
              `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`
          )
          .join("")
      ) +
      "</table>";
    div.innerHTML = table;

    return div;
  },
  { className: "foliumtooltip", sticky: true }
);

geo_json_c24443dad5471729dce5d1d8b2eb3c1b.addTo(
  savoyMap
);

function geo_json_75f4217577cc8220f9a396cf9ddaa9d9_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_75f4217577cc8220f9a396cf9ddaa9d9_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_75f4217577cc8220f9a396cf9ddaa9d9_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg viewBox="-2 -2 104 104" height="20" width="20" class="sa-svg" xmlns="http://www.w3.org/2000/svg"\u003e\u003cpath d="M50 100A50 50,0,0,0,100 50L50 50Z" fill="#e7298a"/\u003e\u003ccircle r="50" cx="50" cy="50" fill="none" stroke="black" stroke-width="4px" stroke-opacity="0.3" /\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_75f4217577cc8220f9a396cf9ddaa9d9_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_75f4217577cc8220f9a396cf9ddaa9d9_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_75f4217577cc8220f9a396cf9ddaa9d9.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_75f4217577cc8220f9a396cf9ddaa9d9_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_75f4217577cc8220f9a396cf9ddaa9d9 = L.geoJson(null, {
  onEachFeature: geo_json_75f4217577cc8220f9a396cf9ddaa9d9_onEachFeature,

  style: geo_json_75f4217577cc8220f9a396cf9ddaa9d9_styler,
  pointToLayer: geo_json_75f4217577cc8220f9a396cf9ddaa9d9_pointToLayer,
});

function geo_json_75f4217577cc8220f9a396cf9ddaa9d9_add(data) {
  geo_json_75f4217577cc8220f9a396cf9ddaa9d9.addData(data);
}
fetch("./json/sj-j-o.json")
  .then((response) => response.json())
  .then((json) => geo_json_75f4217577cc8220f9a396cf9ddaa9d9_add(json));

geo_json_75f4217577cc8220f9a396cf9ddaa9d9.bindTooltip(
  function (layer) {
    let div = L.DomUtil.create("div");

    let handleObject = (feature) =>
      typeof feature == "object" ? JSON.stringify(feature) : feature;
    let fields = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let table =
      "<table>" +
      String(
        fields
          .map(
            (v, i) =>
              `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`
          )
          .join("")
      ) +
      "</table>";
    div.innerHTML = table;

    return div;
  },
  { className: "foliumtooltip", sticky: true }
);

geo_json_75f4217577cc8220f9a396cf9ddaa9d9.addTo(
  savoyMap
);

function geo_json_af6256e12605ed4c82beb14f1648135f_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_af6256e12605ed4c82beb14f1648135f_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_af6256e12605ed4c82beb14f1648135f_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg height="20" width="20"\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_af6256e12605ed4c82beb14f1648135f_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_af6256e12605ed4c82beb14f1648135f_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_af6256e12605ed4c82beb14f1648135f.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_af6256e12605ed4c82beb14f1648135f_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_af6256e12605ed4c82beb14f1648135f = L.geoJson(null, {
  onEachFeature: geo_json_af6256e12605ed4c82beb14f1648135f_onEachFeature,

  style: geo_json_af6256e12605ed4c82beb14f1648135f_styler,
  pointToLayer: geo_json_af6256e12605ed4c82beb14f1648135f_pointToLayer,
});

function geo_json_af6256e12605ed4c82beb14f1648135f_add(data) {
  geo_json_af6256e12605ed4c82beb14f1648135f.addData(data);
}
fetch("./json/sj-j-cp.json")
  .then((response) => response.json())
  .then((json) => geo_json_af6256e12605ed4c82beb14f1648135f_add(json));

geo_json_af6256e12605ed4c82beb14f1648135f.bindTooltip(
  function (layer) {
    let div = L.DomUtil.create("div");

    let handleObject = (feature) =>
      typeof feature == "object" ? JSON.stringify(feature) : feature;
    let fields = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let table =
      "<table>" +
      String(
        fields
          .map(
            (v, i) =>
              `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`
          )
          .join("")
      ) +
      "</table>";
    div.innerHTML = table;

    return div;
  },
  { className: "foliumtooltip", sticky: true }
);

geo_json_af6256e12605ed4c82beb14f1648135f.addTo(
  savoyMap
);

function geo_json_4105495bb8b8b4d5426742bc2bd45dba_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_4105495bb8b8b4d5426742bc2bd45dba_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_4105495bb8b8b4d5426742bc2bd45dba_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg height="20" width="20"\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_4105495bb8b8b4d5426742bc2bd45dba_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_4105495bb8b8b4d5426742bc2bd45dba_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_4105495bb8b8b4d5426742bc2bd45dba.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_4105495bb8b8b4d5426742bc2bd45dba_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_4105495bb8b8b4d5426742bc2bd45dba = L.geoJson(null, {
  onEachFeature: geo_json_4105495bb8b8b4d5426742bc2bd45dba_onEachFeature,

  style: geo_json_4105495bb8b8b4d5426742bc2bd45dba_styler,
  pointToLayer: geo_json_4105495bb8b8b4d5426742bc2bd45dba_pointToLayer,
});

function geo_json_4105495bb8b8b4d5426742bc2bd45dba_add(data) {
  geo_json_4105495bb8b8b4d5426742bc2bd45dba.addData(data);
}
fetch("./json/sj-j-gf.json")
  .then((response) => response.json())
  .then((json) => geo_json_4105495bb8b8b4d5426742bc2bd45dba_add(json));

geo_json_4105495bb8b8b4d5426742bc2bd45dba.bindTooltip(
  function (layer) {
    let div = L.DomUtil.create("div");

    let handleObject = (feature) =>
      typeof feature == "object" ? JSON.stringify(feature) : feature;
    let fields = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "Savoy Original",
      "Savoy Cracked Pepper",
      "Savoy Original Gluten Free",
      "Jatz Original",
      "Jatz Cracked Pepper",
      "Jatz Original Gluten Free",
    ];
    let table =
      "<table>" +
      String(
        fields
          .map(
            (v, i) =>
              `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`
          )
          .join("")
      ) +
      "</table>";
    div.innerHTML = table;

    return div;
  },
  { className: "foliumtooltip", sticky: true }
);

geo_json_4105495bb8b8b4d5426742bc2bd45dba.addTo(
  savoyMap
);

savoyMap.fitBounds(
  [
    [-42.974982, 114.616117],
    [-12.371249, 153.570242],
  ],
  { padding: [30, 30] }
);
