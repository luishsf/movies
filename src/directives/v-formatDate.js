let setValue = function(el, binding) {
  let value = binding.value;
  let dateArray = value.split('-');
  let monthsArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  el.innerText =  `${monthsArray[+dateArray[1] - 1]}, ${dateArray[0]}`;
};
module.exports = {
  isLiteral: true,
  bind(el, binding) {
    setValue(el, binding);
  },
  update(el, binding) {
    setValue(el, binding);
  }
}
