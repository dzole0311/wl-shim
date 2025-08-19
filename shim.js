(function () {
  function register() {
    if (window.deck && window.WeatherLayers) {
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
            if (window.deck._registerJSClass) {
              window.deck._registerJSClass(cls, `WeatherLayers.${name}`);
              console.log(`[shim] _registerJSClass → WeatherLayers.${name}`);
            } else if (window.deck.JSONConverter && window.deck.JSONConverter.addClass) {
              window.deck.JSONConverter.addClass(`WeatherLayers.${name}`, cls);
              console.log(`[shim] JSONConverter.addClass → WeatherLayers.${name}`);
            } else {
              console.warn('[shim] No registration API found in deck.gl');
            }
          }
        });
      } catch (err) {
        console.error('[shim] Failed to register WeatherLayers layers', err);
      }
    } else {
      console.warn('[shim] deck.gl or WeatherLayers not available yet, retrying…');
      setTimeout(register, 500);
    }
  }

  register();
})();
