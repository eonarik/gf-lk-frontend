export default (...args) => {
  const clss = [].concat(args.length === 1 ? args[0] : args);
  const resultArCls = [];
  for (let i = 0; i < clss.length; i++) {
    const cls = clss[i];
    if (typeof cls === 'object') {
      for (const key in cls) {
        if (cls[key]) resultArCls.push(key);
      }
    } else {
      resultArCls.push(cls);
    }
  }
  return resultArCls.join(' ');
};
