# Brandon's Blog Theme

## Overview

A custom drupal theme created for my personal blog. Focusing on readability and responsive design.

## Installation

1. Place this project in ```/path/to/Drupal/themes/custom```.

1. Go to /admin/appearance and set Brandon's Blog Theme as default.

1. In Brandon's Blog Theme settings, set the two accent colors to fit your blogs color scheme.

1. Follow [the guide for further optional setup instructions](#further-optional-setup-instructions)

## Tech Stack:

-   Drupal
-   Linux
-   Apache
-   MariaDB
-   PHP
-   Sass
-   Webpack


## Custom Features:

- Allow administrators to change the colour scheme of the theme.

## Further Optional Setup Instructions

### Nodes

#### Title Placement:

The default placement for the 'Page Title' block in this theme is in the "Lower Header" region. However, it will still work in other locations.

### Users

#### Place user navigation in main menu

The user menu can be a standalone block. It takes care of providing links to the users profile as well as ability to login/logout. The preffered placement of these options for this theme is within the main navigation. To accomplish this:

1. If you want to group all actions within a submenu:
  1. Go to `/admin/structure/menu/manage/main`
  1. Click "add link"
  1. Title = User
  1. Link = &lt;nolink&gt;
  1. Click save.
1. Go to `/admin/structure/menu/manage/account`.
1. Click on edit for each link.
  1. Set parent link to either Main Navigation or the empty link you created in step 1. (Alternatively, it can be placed in another menu, like the footer using similar steps.)

#### Support for custom user websites:

In articles, it is possible for the author's name to also be a link to their site. To use this feature:

1. Go to `/admin/config/people/accounts/fields`.
1. Add the website field. Use the following:

```
Label: Website
Machine Name: field_website
Field Type: Text (plain)
```
