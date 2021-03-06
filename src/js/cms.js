import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ValeursPreview from "./cms-preview-templates/valeurs";
import ProjetsPreview from "./cms-preview-templates/projets";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("valeurs", ValeursPreview);
CMS.registerPreviewTemplate("projets", ProjetsPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
