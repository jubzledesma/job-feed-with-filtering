declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare namespace JSX {
  interface IntrinsicElements {
    
    'app-pagination': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      limit?: number;
      page?: number;
      total?: number;
      totalpages?: number;
      onDoChangeLimit?: (event: CustomEvent<{numOfItems:number}>) => void;
      onDoChangePage?: (event: CustomEvent<{amount:number}>) => void;
    };
    
    'app-filter': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      title?: string;
      filters?: Array;
      onDoFilter?: (event: CustomEvent<{filterGroup:string, selection:string}>) => void;
    };

    'app-job-feed-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      data?: string,
      isloading: boolean,
      errormessage: string
    };

    'app-navigation': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    };

  }
}
