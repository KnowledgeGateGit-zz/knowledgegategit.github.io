const CallYoutubeAPI = YTChannelFetch();

function YTChannelFetch() {
    return new Vue({
        el: '#app',
        data() {
            return {
                subscriberCount: null
            };
        },
        mounted() {
            axios.get('https://www.googleapis.com/youtube/v3/channels', {
                params: {
                    part: 'statistics',
                    id: 'UCA6yfpYhy5sWMjRGOT-OAIQ',
                    key: 'AIzaSyAnqgAxMy3A-3xl7rGhh3AAF6Z3w4VbczU'
                }
            })
                .then(response => (this.subscriberCount = response.data['items'][0]['statistics']['subscriberCount']));
        }
    });
}

