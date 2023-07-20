# This document shows which components are used in which repositories prior
# to being upgraded to Vue3

# Components in SBC-Common
•	Auth Menu*
•	Authentication Options
•	Authentication Options Dialog
•	Base Address
•	Browser Version Alert*
•	Fee Summary
•	Footer
•	Header
•	Loading Screen*
•	Loader*
•	Login*
•	Mobile Device Alert*
•	Navigation Bar
•	Notification Panel*
•	Pay System Alert
•	Product Selector*
•	Sign In*
•	Sign Out*
•	System Alert
•	System Banner*
•	System Error
•	System Error Modal

# SBC Auth Menu
Uses Account Module and Auth Module from Store.
Vue Version: Vue3
Used by components:
•	SBC-Login
Used by repositories:
•	BCRegistry
•	Auth
•	Search

# Authentication Options
Does not use Store.
Vue Version: Vue2
REPLACED BY ChooseAuthMethodView.vue
Used by components:
•	SBC-Authentication-Options-Dialogue
Used by repositories:
•	NONE

# Authentication Options Dialog
Does not use Store.
Vue Version: Vue2
REPLACED BY ChooseAuthMethodView.vue
Used by components:
•	NONE
Used by repositories:
•	NONE

# Base Address
Does not use Store.
Vue Version: Vue2
Used by components:
•	CompletingParty
Used by repositories:
•	BCRS-Shared-Components
•	Business-Create-UI
•	Business-Edit-UI
•	Business-Filings-UI
•	Fas-UI
•	PPR-UI
•	Auth


# Browser Version Alert
Does not use Store.
Vue Version: Vue3
Used by components:
•	SBC-Header
Used by repositories:
•	NONE

# Fee Summary
Does not use Store.
ALREADY EXISTS IN BCRS-SHARED-COMPONENTS, but uses implementation from SBC-Common-Components
Vue Version: Vue2
Used by components:
•	NONE
Used by repositories:
•	BCRS-Shared-Components

# Footer
Does not use Store.
Vue Version: Vue3
Used by components:
•	NONE
Used by repositories:
•	BCRegistry
•	Business-Create-UI
•	Business-Edit-UI
•	Business-Filings-UI
•	Fas-Ui
•	PPR-Ui
•	Search
•	Auth

# Header
Uses Account Module, Notification Module, and Auth Module from Store.
Vue Version: Vue3
Used by components:
•	NONE
Used by repositories:
•	BCRegistry
•	Business-Create-UI
•	Business-Edit-UI
•	Business-Filings-UI
•	Fas-Ui
•	PPR-Ui
•	Search
•	Auth

# Loading Screen
Does not use Store.
Vue Version: Vue3
Used by components:
•	SignOut
•	SignIn
Used by repositories:
•	Fas-UI
•	Auth

# Loader
Does not use Store.
Vue Version: Vue3
Used by components:
•	NONE
Used by repositories:
•	Fas-UI
•	Auth

# Login
Does not use Store.
Vue Version: Vue3
Used by components:
•	NONE
Used by repositories:
•	PPR-UI
•	Search
•	Auth
Mobile Device Alert
Does not use Store.
Vue Version: Vue3
Used by components:
•	SBC-Header
Used by repositories:
•	NONE

# Navigation Bar
Uses Account Module and Auth Module from Store.
Only reference to Nav bar in Auth-Web:

Replaced with BreadCrumbs?
Vue Version: Vue2
Used by components:
•	NONE
Used by repositories:
•	NONE

# Notification Panel
Uses Notification Module from Store.
Vue Version: Vue3
Used by components:
•	SBC-Header
Used by repositories:
•	 NONE


# Pay System Alert
Uses Status Module from Store.
Vue Version: Vue2
Used by components:
•	 NONE
Used by repositories:
•	Business-Edit-UI (Imported but never used?)

# Product Selector
Uses Product Module from Store.
Vue Version: Vue3
Used by components:
•	SBC-Header
Used by repositories:
•	 NONE

# Sign In
Uses Account Module and Auth Module from Store.
Vue Version: Vue3
Used by components:
•	NONE
Used by repositories:
•	 BCRegistry
•	Fas-UI
•	PPR-UI
•	Search
•	Auth

# Sign Out
Does not use Store.
Vue Version: Vue3
Used by components:
•	NONE
Used by repositories:
•	 BCRegistry
•	Business-Create-UI
•	Business-Edit-UI
•	Business-Filings-UI
•	Fas-UI
•	PPR-UI
•	Search
•	Auth

# System Alert
Does not use Store.
Vue Version: Vue2
Used by components:
•	NONE
Used by repositories:
•	NONE

# System Banner
Does not use Store.
Vue Version: Vue3
Used by components:
•	NONE
Used by repositories:
•	PPR-UI

# System Error
Does not use Store.
Vue Version: Vue2
Used by components:
•	SBC-System-Error-Modal
Used by repositories:
•	Auth

# System Error Modal
Does not use Store.
Vue Version: Vue2
Used by components:
•	NONE
Used by repositories:
•	NONE



