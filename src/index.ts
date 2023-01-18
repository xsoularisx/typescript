import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

if (typeof window !== undefined && window && window.addEventListener) {
  window.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const dateIn = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const dateOut = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 3
    );
    renderUserBlock("user name", "/img/avatar.png", 3);
    renderSearchFormBlock(dateIn, dateOut);
    renderSearchStubBlock();
    renderToast(
      {
        text: "Это пример уведомления. Используйте его при необходимости",
        type: "success",
      },
      {
        name: "Понял",
        handler: () => {
          console.log("Уведомление закрыто");
        },
      }
    );
  })
}
