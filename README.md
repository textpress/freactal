# Fork of [freactal](https://github.com/textpress/freactal)

Major changes:

 - **Effects can return an async reducer**; that is, the value you provide for each key in your `effects` object is:
   - A function that takes `effects` and any arguments you pass to it at the call site and returns...
   - A promise that resolves to...
   - A function that takes in state and returns...
   - A promise that resolves to...
   - The updated state.

 - **New `finalize` effect**, triggered on unmount (symmetry with `initialize`)
 - **New `willRecieveProps` effect**, will be called when component receives new props
 - Fix for [`TypeError: Cannot redefine property: ...` bug](https://github.com/textpress/freactal/commit/4db4e42b172ae6f32a6c58a0fb33f5ddc20bd625) triggered by a presence of computed props
