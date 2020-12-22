class FeedUrlServices {
    public async getFeed(feedUrl: string) {
        const res = await fetch(feedUrl, {method: 'GET'})
        const resText = await res.text()
    }
}

export const feedUrlServices = new FeedUrlServices()