export const getEffects = (hocState, effectDefs, parentEffects) => {
  const applyReducer = reducer => Promise.resolve(reducer ? reducer(hocState.state) : null);
  const effects = Object.keys(effectDefs).reduce((memo, effectKey) => {
    const effectFn = effectDefs[effectKey];

    memo[effectKey] = (...args) => new Promise(resolve =>
      resolve(effectFn(effects, ...args))
    )
      .then(applyReducer)
      .then(result => {
        if (result) {
          hocState.setState(result);
        }

        return result;
      });

    return memo;
  }, Object.assign({}, parentEffects, { initialize: null, finalize: null }));

  return effects;
};
