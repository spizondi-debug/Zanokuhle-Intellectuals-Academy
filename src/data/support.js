// Configurable donation/support details — separate from involvementPathways
// (data/getInvolved.js) because these specifically need real, confirmed
// values from Zanokuhle before they can go live, rather than copy that's
// already final.
//
// Nothing here is invented. Both are unset by default, so GetInvolved.jsx
// shows only the enquiry-form pathway (the current, honest state) until
// real values exist.

// PLACEHOLDER — Zanokuhle must supply real banking details before this can
// be shown publicly: account name, bank, account type, account number,
// branch code, and the reference format donors should use. Set this to an
// object (not null) once confirmed — see the shape GetInvolved.jsx expects
// in its EFT_DETAILS_SHAPE comment below.
export const EFT_DETAILS = null

// EFT_DETAILS_SHAPE — fill in EFT_DETAILS above using this shape once
// Zanokuhle confirms real banking details:
// {
//   accountName: 'Zanokuhle Intellectuals Academy NPC',
//   bank: '',
//   accountType: '',
//   accountNumber: '',
//   branchCode: '',
//   reference: 'Please use your name and "Donation" as the payment reference.',
// }

// A secure payment link (e.g. a PayFast, Yoco or SnapScan payment page).
// Configure via VITE_PAYMENT_LINK_URL once Zanokuhle has chosen and set up
// a payment processor — never hardcoded here.
export const PAYMENT_LINK_URL = import.meta.env.VITE_PAYMENT_LINK_URL || ''
