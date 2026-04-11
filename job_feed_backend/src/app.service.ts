import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLinks() {
    return {
      api_name: 'Job Feed with Server-side Filtering',
      _links: {
        self: { href: '/' },
        jobs: { href: '/jobs' },
      },
    };
  }
}
