# npm Install Fix

## Issue
There are peer dependency conflicts between:
- `react-scripts@5.0.1` (requires TypeScript 4.x)
- `react-i18next@15.5.3` (requires TypeScript 5.x)

## Solution Applied

1. **Downgraded TypeScript** to `^4.9.5` (compatible with react-scripts)
2. **Added `.npmrc` file** with `legacy-peer-deps=true` to handle peer dependency conflicts
3. **Added `overrides` in package.json** to force TypeScript 4.9.5

## If npm install still fails with permission errors:

### Fix npm cache permissions (macOS/Linux):
```bash
sudo chown -R $(whoami) ~/.npm
```

Or use a different cache location:
```bash
npm config set cache ~/.npm-cache
```

### Then install:
```bash
npm install
```

The `.npmrc` file will automatically use `--legacy-peer-deps` for all npm commands.

## Alternative: Manual install with flag

If the above doesn't work, you can always run:
```bash
npm install --legacy-peer-deps
```

This is safe to use and is the recommended approach for Create React App projects with peer dependency conflicts.

