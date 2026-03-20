# i18next Internationalization TODO

## ✅ 0. Created TODO.md & got plan approval

## ✅ 1. Install dependencies
cd university-website && npm install i18next react-i18next (executed)

## ✅ 2. Create i18n.js
Created university-website/src/i18n.js with config + comprehensive resources

## ✅ 3. Update main.jsx
Added import './i18n';

## ✅ 4. Update Navbar.jsx
Added useTranslation, replaced nav/search/login texts, updated lang buttons with changeLanguage + localStorage

## [ ] 5. Update Footer.jsx
Replace all strings with t()

## ✅ 6. Update AboutSection.jsx
Added useTranslation and replaced texts with t()

## ✅ 7. Update key pages/components
- ✅ Students.jsx
- [ ] notices.jsx (data/notices.jsx component)
- [ ] Visitors.jsx
- [ ] Programmes.jsx
- [ ] Announcements.jsx
- [ ] Administration.jsx

## [ ] 8. Update remaining pages
Contact, Departments, Admission, News, etc.

## [ ] 9. Test
- npm run dev
- Switch English <-> Hindi
- Verify full site translation + localStorage persistence

## [ ] 10. Final verification & cleanup
