import SimpleBar from "simplebar";
import vars from '../_vars';

vars.$headerSelectList.forEach(item => {
  let simplebar = new SimpleBar(item, {
    autoHide: false,
  });
})
