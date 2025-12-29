# Component Reorganization & Naming Refactor Proposal

## Overview

This proposal outlines improvements to the InstallKit components focusing on terminology consistency and potential consolidation opportunities. The codebase has been significantly refactored recently, but there are still areas where naming and organization can be improved for better developer experience.

## Current State Analysis

### Strengths of Recent Refactoring ✅
- **Good separation**: Layout components removed from `_components` folder
- **Zustand migration**: State management consolidated into `use-package-store.ts`
- **Clean architecture**: Page component (`page.tsx`) properly orchestrates hooks and components
- **Good hook organization**: Focused, single-responsibility hooks
- **Improved naming**: Most components have clear, descriptive names

### Current Component Structure
**Components** (`/_components/` - 15 files, 1856 lines):
- `header.tsx` (203 lines) - Main header with search, logo, actions
- `command-footer.tsx` (122 lines) - Bottom bar with brew commands
- `full-catalog-search.tsx` (242 lines) - Search dialog for full catalog
- `share-dialog.tsx` (312 lines) - Share functionality
- `sync-dialog.tsx` (151 lines) - Sync functionality
- `full-catalog-package.tsx` (161 lines) - Package cards from full catalog
- `categories.tsx` (161 lines) - Category filter component
- `app-info-popover.tsx` (143 lines) - App details popover
- `app-icon.tsx` (80 lines) - App icon display
- `app-grid-by-category.tsx` (75 lines) - Grid with category grouping
- `search-results-section.tsx` (78 lines) - Search results display
- `app-card.tsx` (51 lines) - Individual app card
- `selection-checkbox.tsx` (35 lines) - Selection checkbox
- `app-grid.tsx` (23 lines) - Basic app grid
- `kit-header.tsx` (19 lines) - Shared kit header display

**Hooks** (`/_hooks/` - 9 files, 992 lines):
- `use-package-store.ts` (296 lines) - Main Zustand store
- `use-full-catalogue.ts` (285 lines) - Full catalog management
- `use-package-selection.ts` (146 lines) - Package selection orchestration
- `use-filtered-apps.ts` (61 lines) - App filtering logic
- `use-url-params.ts` (56 lines) - URL parameter handling
- `use-full-catalog-info.ts` (52 lines) - Package info fetching
- `use-copy-command.ts` (36 lines) - Command copying
- `use-full-catalog-search.ts` (33 lines) - Search functionality
- `use-analytics.ts` (27 lines) - Analytics tracking

## Remaining Issues

### 1. Terminology Inconsistencies ⚠️
The codebase mixes terminology for packages from the full Homebrew catalog:
- **"customPackages"** in code (store, hooks, functions)
- **"Full Catalog"** in UI (dialogs, headings, component names)
- **"custom packages"** in comments

This creates confusion - are they "custom" or from the "full catalog"?

**Examples of inconsistency:**
```
// In use-package-store.ts
customPackages: CustomPackage[]
addCustomPackage()
toggleCustomPackage()

// In full-catalog-package.tsx
export interface FullCatalogPackageType

// In UI text
"From Full Catalog"
```

### 2. British vs American Spelling 🇬🇧🇺🇸
- `use-full-catalogue.ts` (British spelling)
- "full catalog" in UI and other components (American spelling)
- Mixed usage throughout codebase

### 3. Potential Component Consolidations
Some small, tightly-coupled components could be combined:

**App Display Components** (~186 lines total):
- `app-card.tsx` (51 lines)
- `app-icon.tsx` (80 lines)
- `selection-checkbox.tsx` (35 lines)
- `kit-header.tsx` (19 lines)

These are always used together and have tight dependencies.

**Grid Components** (~98 lines total):
- `app-grid.tsx` (23 lines)
- `app-grid-by-category.tsx` (75 lines)

Very small files with similar purposes.

## Proposed Solution

### 1. Standardize Terminology Throughout Codebase

#### Core Terminology
- **Curated Apps/Catalog**: The handpicked apps in our main listing (from `APPS` array)
- **Full Catalog**: The complete Homebrew repository (searchable via API)
- **Full Catalog Packages**: Packages added from full catalog search (not "custom packages")

#### Naming Convention Changes

**Code Level** (variables, functions, types):
```
customPackages → fullCatalogPackages
CustomPackage → FullCatalogPackage
addCustomPackage → addFullCatalogPackage
toggleCustomPackage → toggleFullCatalogPackage
selectedCustomPackages → selectedFullCatalogPackages
customPackageIds → fullCatalogPackageIds
```

**File Names**:
```
use-full-catalogue.ts → use-full-catalog.ts
full-catalog-package.tsx → (keep - already correct)
full-catalog-search.tsx → (keep - already correct)
```

**Comments & Documentation**:
- Update all references from "custom packages" to "full catalog packages"
- Clarify distinction between "curated" and "full catalog"

### 2. Standardize Spelling to American English

Consistency with American spelling (matching most of codebase):
- "catalog" instead of "catalogue" everywhere
- Update file: `use-full-catalogue.ts` → `use-full-catalog.ts`
- Update all function/variable names with "catalogue" → "catalog"

### 3. Optional Component Consolidations

#### Option A: Consolidate App Display Components
**Combine**: `app-card.tsx` + `app-icon.tsx` + `selection-checkbox.tsx`
- **New file**: `app-card.tsx` (~166 lines)
- **Benefits**: Reduces file navigation, co-locates tightly coupled code
- **Tradeoff**: Slightly larger file, but still well within reasonable size

#### Option B: Consolidate Grid Components  
**Combine**: `app-grid.tsx` + `app-grid-by-category.tsx`
- **New file**: `app-grid.tsx` (~98 lines)
- **Benefits**: Single source for grid layouts, clearer component hierarchy
- **Tradeoff**: Minimal - both are already small

#### Option C: Keep Current Structure
- **Benefits**: No refactoring needed, clear separation already exists
- **Tradeoff**: More files to navigate, but each has clear purpose

## Recommended Implementation Plan

### Phase 1: Terminology Standardization (High Priority)
**Impact**: High clarity improvement, low risk
**Effort**: Medium (touches many files)

1. **Update Type Definitions**
   - Rename `CustomPackage` → `FullCatalogPackage` in `brew-commands.ts`
   - Update all type references throughout codebase

2. **Update Store Variables & Functions**
   - `use-package-store.ts`: Rename all "custom" references to "fullCatalog"
   - Update state properties, actions, and function names

3. **Update Hook Names**
   - `useCustomPackages()` → `useFullCatalogPackages()`
   - Update all hook references in consuming components

4. **Update Component Props & Variables**
   - Update prop names in all components
   - Update local variable names for consistency

5. **Update Comments & Documentation**
   - Change "custom packages" → "full catalog packages"
   - Add clarifying comments about "curated" vs "full catalog"

### Phase 2: Spelling Standardization (Medium Priority)
**Impact**: Medium clarity improvement, low risk
**Effort**: Low (fewer files affected)

1. **Rename File**
   - `use-full-catalogue.ts` → `use-full-catalog.ts`

2. **Update Function Names**
   - `useFullCatalogue()` → `useFullCatalog()`
   - Update all references

3. **Update Internal Variables**
   - Any "catalogue" references → "catalog"

### Phase 3: Component Consolidation (Optional)
**Impact**: Low-medium improvement, low risk
**Effort**: Low-medium

Only if team agrees consolidation adds value:
1. Consolidate app display components
2. Consolidate grid components
3. Update imports across codebase

## Migration Impact Assessment

### Files Requiring Updates

**Phase 1 - Terminology (Critical Path)**:
- `lib/helpers/brew-commands.ts` - Type definitions
- `app/(landing)/_hooks/use-package-store.ts` - Store state & actions
- `app/(landing)/_hooks/use-package-selection.ts` - Hook orchestration
- `app/(landing)/_components/full-catalog-package.tsx` - Component props
- `app/(landing)/page.tsx` - Main page integration
- Any components using these hooks/types

**Phase 2 - Spelling**:
- `app/(landing)/_hooks/use-full-catalogue.ts` - Rename file & exports
- `app/(landing)/_hooks/use-full-catalog-info.ts` - Update imports
- `app/(landing)/_hooks/use-full-catalog-search.ts` - Update imports
- `app/(landing)/_hooks/use-package-selection.ts` - Update imports

**Phase 3 - Consolidation (Optional)**:
- Components being consolidated
- All files importing those components

### Testing Requirements
- Verify package selection/deselection works
- Test full catalog search and add functionality
- Verify URL sharing with full catalog packages
- Test localStorage persistence
- Ensure brew command generation works correctly

## Risk Assessment

### Low Risk ✅
- Pure refactoring - no logic changes
- TypeScript will catch any missed renames
- Existing functionality preserved
- Can be done incrementally

### Medium Risk ⚠️
- Many files to update (potential for missing references)
- Need thorough testing of package selection flow
- localStorage might have migration considerations

### Mitigation Strategies
1. **Use TypeScript's rename refactoring** where possible
2. **Update in logical phases** (types → store → hooks → components)
3. **Test after each phase** before moving to next
4. **Keep commits focused** for easy rollback
5. **Run full build** to catch any TypeScript errors

## Success Metrics

### Quantitative
- Zero usage of "customPackage" terminology in code
- 100% consistent American spelling ("catalog" not "catalogue")
- All TypeScript errors resolved
- All tests passing

### Qualitative
- New developers can immediately understand "full catalog packages"
- Clear mental model: curated catalog (main) vs full catalog (search)
- Improved code discoverability
- Better code review experience

## Conclusion

The InstallKit codebase has been significantly improved through recent refactoring. The main remaining issue is **terminology inconsistency** between "custom packages" in code and "full catalog" in the UI. 

**Recommended Action**: Implement Phase 1 (Terminology Standardization) as a priority to align code with UI terminology. This will significantly improve code clarity and developer experience.

Phase 2 (Spelling) is a nice-to-have for consistency. Phase 3 (Consolidation) is optional and can be decided based on team preference for larger vs more modular files.

The proposed changes are low-risk, preserve all functionality, and will make the codebase more intuitive for current and future developers.