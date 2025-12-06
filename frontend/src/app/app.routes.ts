import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blogs',
    loadComponent: () =>
      import('./pages/blogs/blogs.component').then((m) => m.BlogsComponent),
    data: { title: 'Blogs - Tirthya Kamal Dasgupta' },
  },
];
