import TileLayer from 'ol/layer/tile'
import TileImage from 'ol/source/tileimage'
import Style from 'ol/style/style'
import Circle from 'ol/style/circle'
import Fill from 'ol/style/fill'
import Stroke from 'ol/style/stroke'
import VectorLayer from 'ol/layer/vector'
import Vector from 'ol/source/vector'
import GPX from 'ol/format/gpx'
import Map from 'ol/map'
import View from 'ol/view'
import proj from 'ol/proj'
import 'jquery'

var initZoom = 15; // ズームの初期値
var MinZoom  = 6;   // ズームの最小値（最も広い範囲）
var MaxZoom  = 21;  // ズームの最大値（最も狭い範囲）
var center_lon = 135.083273333333; // 表示中心の経度（デフォルトは始点の経度）
var center_lat = 34.63374; // 表示中心の緯度（デフォルトは始点の緯度）
var gpx_extent = null;

function init_map() {
  var gpslog = $('.yamalog_gpslog_url').val();

  var raster = new TileLayer({
    source: new TileImage({ url: 'http://mt1.google.com/vt/lyrs=m@113&hl=en&&x={x}&y={y}&z={z}' })
  });

  var style = {
    'Point': new Style({
      image: new Circle({
        fill: new Fill({
          color: 'rgba(255,255,0,0.4)'
        }),
        radius: 5,
        stroke: new Stroke({
          color: '#ff0',
          width: 1
        })
      })
    }),
    'LineString': new Style({
      stroke: new Stroke({
        color: '#f00',
        width: 3
      })
    }),
    'MultiLineString': new Style({
      stroke: new Stroke({
        color: '#0f0',
        width: 3
      })
    })
  };

  var gpx_vector = new VectorLayer({
    source: new Vector({
      url: gpslog,
      format: new GPX()
    }),
    style: function(feature) {
      return style[feature.getGeometry().getType()];
    }
  });

  var view = new View({maxZoom: MaxZoom, minZoom: MinZoom});

  var map = new Map({
    layers: [raster, gpx_vector],
    target: document.getElementById('map'),
    view: view
  });

  view.setCenter(proj.transform([center_lon, center_lat], "EPSG:4326", "EPSG:3857"));
  view.setZoom(initZoom);

  gpx_vector.once('change',function() {
    gpx_extent = gpx_vector.getSource().getExtent();
    view.fit(gpx_extent, map.getSize());
  });
}

init_map();
