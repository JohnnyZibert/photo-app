import {RouteProps} from 'react-router-dom';
import React from 'react';
import {AboutUs} from "../../../pages/AboutPage";
import {OurWork} from "../../../pages/OurWorkPage";
import {ContactUs} from "../../../pages/ContactPage";
import {OneMovie} from "../../ui/OneMovie/OneMovie";

export enum AppRoutes {
    ABOUT = '/*',
    WORKS = 'works',
    WORK = 'work/:id',
    CONTACT = 'contact'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/*',
    [AppRoutes.WORKS]: '/works',
    [AppRoutes.WORK]: 'work/:id',
    [AppRoutes.CONTACT]: 'contact',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: RoutePath["/*"],
        element: <AboutUs/>,
    },
    [AppRoutes.WORKS]: {
        path: RoutePath.works,
        element: <OurWork/>,
    },
    [AppRoutes.WORK]: {
        path: RoutePath["work/:id"],
        element: <OneMovie/>,
    },
    [AppRoutes.CONTACT]: {
        path: RoutePath.contact,
        element: <ContactUs/>,
    },
};
