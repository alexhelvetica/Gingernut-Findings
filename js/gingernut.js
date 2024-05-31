var gingernutMap = L.map(
  "gingernutMap",
  {
    center: [0.0, 0.0],
    crs: L.CRS.EPSG3857,
    zoom: 1,
    zoomControl: true,
    preferCanvas: false,
  }
);

var tile_layer_8bbf3e4466d2a6731b8529b834a2aa98 = L.tileLayer(
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

tile_layer_8bbf3e4466d2a6731b8529b834a2aa98.addTo(
  gingernutMap
);

function geo_json_b1f649515a0637e20fffe7366e421069_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_b1f649515a0637e20fffe7366e421069_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_b1f649515a0637e20fffe7366e421069_pointToLayer(
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

  let style = geo_json_b1f649515a0637e20fffe7366e421069_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_b1f649515a0637e20fffe7366e421069_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_b1f649515a0637e20fffe7366e421069.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_b1f649515a0637e20fffe7366e421069_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_b1f649515a0637e20fffe7366e421069 = L.geoJson(null, {
  onEachFeature: geo_json_b1f649515a0637e20fffe7366e421069_onEachFeature,

  style: geo_json_b1f649515a0637e20fffe7366e421069_styler,
  pointToLayer: geo_json_b1f649515a0637e20fffe7366e421069_pointToLayer,
});

function geo_json_b1f649515a0637e20fffe7366e421069_add(data) {
  geo_json_b1f649515a0637e20fffe7366e421069.addData(data);
}

fetch("./json/gn-vic.json")
  .then((response) => response.json())
  .then((json) => geo_json_b1f649515a0637e20fffe7366e421069_add(json));

geo_json_b1f649515a0637e20fffe7366e421069.bindTooltip(
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
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
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

geo_json_b1f649515a0637e20fffe7366e421069.addTo(
  gingernutMap
);

function geo_json_feb10b7cf21a15d041ccf3f7432d21df_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_feb10b7cf21a15d041ccf3f7432d21df_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_feb10b7cf21a15d041ccf3f7432d21df_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg viewBox="-2 -2 104 104" height="20" width="20" class="nsw-svg" xmlns="http://www.w3.org/2000/svg"\u003e\u003cpath d="M 100 50A50 50,0,0,0,50 0L50 50Z" fill="#d95f02"/\u003e\u003ccircle r="50" cx="50" cy="50" fill="none" stroke="black" stroke-width="4px" stroke-opacity="0.3" /\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_feb10b7cf21a15d041ccf3f7432d21df_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_feb10b7cf21a15d041ccf3f7432d21df_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_feb10b7cf21a15d041ccf3f7432d21df.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_feb10b7cf21a15d041ccf3f7432d21df_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_feb10b7cf21a15d041ccf3f7432d21df = L.geoJson(null, {
  onEachFeature: geo_json_feb10b7cf21a15d041ccf3f7432d21df_onEachFeature,

  style: geo_json_feb10b7cf21a15d041ccf3f7432d21df_styler,
  pointToLayer: geo_json_feb10b7cf21a15d041ccf3f7432d21df_pointToLayer,
});

function geo_json_feb10b7cf21a15d041ccf3f7432d21df_add(data) {
  geo_json_feb10b7cf21a15d041ccf3f7432d21df.addData(data);
}
fetch("./json/gn-nsw.json")
  .then((response) => response.json())
  .then((json) => geo_json_feb10b7cf21a15d041ccf3f7432d21df_add(json));

geo_json_feb10b7cf21a15d041ccf3f7432d21df.bindTooltip(
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
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
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

geo_json_feb10b7cf21a15d041ccf3f7432d21df.addTo(
  gingernutMap
);

function geo_json_929ea7077856ab95498400e4717aa2e7_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_929ea7077856ab95498400e4717aa2e7_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_929ea7077856ab95498400e4717aa2e7_pointToLayer(
  feature,
  latlng
) {
  var opts = {};

  const iconOptions = {
    className: "empty",
    html: '\u003csvg viewBox="-2 -2 104 104" height="20" width="20" class="qld-svg" xmlns="http://www.w3.org/2000/svg"\u003e\u003cpath d="M0 50A50 50,0,0,0,50 100L50 50Z" fill="#7570b3"/\u003e\u003ccircle r="50" cx="50" cy="50" fill="none" stroke="black" stroke-width="4px" stroke-opacity="0.3" /\u003e\u003c/svg\u003e',
  };
  const iconRootAlias = L;
  opts.icon = new iconRootAlias.DivIcon(iconOptions);

  let style = geo_json_929ea7077856ab95498400e4717aa2e7_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_929ea7077856ab95498400e4717aa2e7_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_929ea7077856ab95498400e4717aa2e7.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_929ea7077856ab95498400e4717aa2e7_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_929ea7077856ab95498400e4717aa2e7 = L.geoJson(null, {
  onEachFeature: geo_json_929ea7077856ab95498400e4717aa2e7_onEachFeature,

  style: geo_json_929ea7077856ab95498400e4717aa2e7_styler,
  pointToLayer: geo_json_929ea7077856ab95498400e4717aa2e7_pointToLayer,
});

function geo_json_929ea7077856ab95498400e4717aa2e7_add(data) {
  geo_json_929ea7077856ab95498400e4717aa2e7.addData(data);
}
fetch("./json/gn-qld.json")
  .then((response) => response.json())
  .then((json) => geo_json_929ea7077856ab95498400e4717aa2e7_add(json));

geo_json_929ea7077856ab95498400e4717aa2e7.bindTooltip(
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
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
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

geo_json_929ea7077856ab95498400e4717aa2e7.addTo(
  gingernutMap
);

function geo_json_42f26c03de526ec966c7210de9c5d35c_styler(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.5, weight: 2 };
  }
}
function geo_json_42f26c03de526ec966c7210de9c5d35c_highlighter(feature) {
  switch (feature.id) {
    default:
      return { fillOpacity: 0.75 };
  }
}
function geo_json_42f26c03de526ec966c7210de9c5d35c_pointToLayer(
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

  let style = geo_json_42f26c03de526ec966c7210de9c5d35c_styler(feature);
  Object.assign(opts.icon.options, style);

  return new L.Marker(latlng, opts);
}

function geo_json_42f26c03de526ec966c7210de9c5d35c_onEachFeature(
  feature,
  layer
) {
  layer.on({
    mouseout: function (e) {
      if (typeof e.target.setStyle === "function") {
        geo_json_42f26c03de526ec966c7210de9c5d35c.resetStyle(e.target);
      }
    },
    mouseover: function (e) {
      if (typeof e.target.setStyle === "function") {
        const highlightStyle =
          geo_json_42f26c03de526ec966c7210de9c5d35c_highlighter(
            e.target.feature
          );
        e.target.setStyle(highlightStyle);
      }
    },
  });
}
var geo_json_42f26c03de526ec966c7210de9c5d35c = L.geoJson(null, {
  onEachFeature: geo_json_42f26c03de526ec966c7210de9c5d35c_onEachFeature,

  style: geo_json_42f26c03de526ec966c7210de9c5d35c_styler,
  pointToLayer: geo_json_42f26c03de526ec966c7210de9c5d35c_pointToLayer,
});

function geo_json_42f26c03de526ec966c7210de9c5d35c_add(data) {
  geo_json_42f26c03de526ec966c7210de9c5d35c.addData(data);
}
fetch("./json/gn-sa.json")
  .then((response) => response.json())
  .then((json) => geo_json_42f26c03de526ec966c7210de9c5d35c_add(json));

geo_json_42f26c03de526ec966c7210de9c5d35c.bindTooltip(
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
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
    ];
    let aliases = [
      "name",
      "id",
      "address",
      "latitude",
      "longitude",
      "VIC, TAS",
      "NSW",
      "QLD",
      "SA, WA",
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

geo_json_42f26c03de526ec966c7210de9c5d35c.addTo(
  gingernutMap
);

gingernutMap.fitBounds(
  [
    [-42.974982, 114.616117],
    [-12.371249, 153.570242],
  ],
  { padding: [30, 30] }
);
