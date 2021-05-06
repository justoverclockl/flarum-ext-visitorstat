import app from 'flarum/app';

app.initializers.add('justoverclock/flarum-ext-visitorstat', () => {
  app.extensionData.for('justoverclock-visitorstat').registerSetting({
    setting: 'justoverclock-visitorstat.ApiKeyVisit',
    name: 'ApiKeyVisit',
    type: 'text',
    placeholder: 'Example: https://api.countapi.xyz/hit/your-site.com/visits',
    label: 'Inserisci Api',
    help: 'Inserisci Qui la chiave API',
  });
});
