import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';

app.initializers.add('justoverclock/flarum-ext-visitorstat', () => {
  extend(IndexPage.prototype, 'navItems', (navItems) => {
    if (app.current.matches(IndexPage))
    navItems.add(
      'VisitCounter',
      m(
        'div',
        { className: 'contvis' },
        m('div', { className: 'visitcount' }, [
          m('p', { className: 'textp' }, 'Visitatori'),
          m('div', { className: 'targhetta' }, m('h1', { className: 'numbervis', id: 'countvis' }, '0')),
        ])
      ),
      -100
    );
  });
});
extend(IndexPage.prototype, 'oncreate', function () {
  const countVisitor = document.getElementById('countvis');
  const apikey = app.forum.attribute('ApiKeyVisit');
  /*if (apik === "") {
    alert("Remember to create your Api in admin panel, or visits can't be showed"); // add an alert for empty APik field
    return false;
  }*/
  if (countVisitor === null) return;
  updCount();

  function updCount() {
    fetch(apikey)
      .then((res) => res.json())
      .then((res) => {
        countVisitor.innerHTML = res.value;
      });
  }
});
