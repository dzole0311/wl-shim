(function waitAndRegister() {
  function tryRegister() {
    if (window.deck && window.WeatherLayers && window.deck.JSONConverter) {
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
    } else {
      setTimeout(tryRegister, 200);
    }
  }

  tryRegister();
})();
