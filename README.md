# Webpack 5 POC

- [x] Code splitting
- [ ] Fast Hot Module Replacement (state loss on save, maybe fixed with experimental plugin)
- [x] Linting/Typecheck Logs in console
- [ ] Optimized build output (592K vs 180K for vite by default on both, no optimizations)
- [ ] Module separation for dynamic imports
- [x] Chunk splitting & compression (all deps separately for now)


## Type Checking Log

![type checking log in wp5](https://i.imgur.com/iXuuiPE.png)

## Eslint Log

![eslint log](https://i.imgur.com/3ylde5C.png)

## Default output size

![output size](https://i.imgur.com/G76KtPo.png)