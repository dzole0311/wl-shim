(function () {
  if (window.deck && window.WeatherLayers && window.deck.JSONConverter) {
    try {
      const layers = [
        'ParticleLayer',
        'RasterLayer',
        'ContourLayer',
        'HighLowLayer',
        'FrontLayer',
        'GridLayer'
      ];

      layers.forEach(name => {
        const cls = window.WeatherLayers[name];
        if (cls) {
          window.deck.JSONConverter.registerClass(cls);
          console.log(`[shim] Registered WeatherLayers.${name}`);
        }
      });
    } catch (err) {
      console.error('[shim] Failed to register WeatherLayers layers', err);
    }
  } else {
    console.warn('[shim] deck.gl or WeatherLayers not available yet');
  }
})();
