
export type HeaderNavData = {
  href?: string;
	URL: string;
	text: string;
};

// pathname should be equivalent to window.location.pathname
export function isHeaderNavActive(headerNavData: HeaderNavData, pathname: string): boolean {
	return headerNavData.URL === pathname;
}
