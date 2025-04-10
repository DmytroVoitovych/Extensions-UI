export const getListChildrenMarkupFromData = (e) => `<li class="extensionItem">
         <div class="extensionItemHeader">
         <img src="${e.logo}" alt="${e.name}"/>
         <div class="extensionItemContent">
              <h3 class="text-preset-2">${e.name}</h3>
              <p class="text-preset-5">${e.description}</p>
         </div></div>
         <div class="extensionItemFooter">
         <button class="removeBtn text-preset-6">Remove</button>
         <label for="${e.name}">
  <input id="${e.name}" type="checkbox" name="${e.name}" aria-checked="${e.isActive}" ${e.isActive ? 'checked':''} />
  </label>
         </div>
         </li>`;
