let playlists =  [
    {
        name: 'family-time',
        shows: [
            'scam 1992'
        ]
    },
    {
        name: 'action',
        shows: [
            'family man'
        ]
    },
    {
        name: 'crime',
        shows: [
            'mirzapur'
        ]
    }
]

const addShow = function (request, reply) {
    const { showName, playlistName } = request.body;
    let isAdded = false;

    playlists.forEach(function (playlist) {
        if (playlist.name === playlistName) {
            isAdded = true;
            playlist.shows.push(showName);
        }
    });

    if (!isAdded){
        playlists.push({
            name: playlistName,
            shows: [showName]
        });

        return reply
            .code(201)
            .send({ msg: 'Created new playlist and added favorite show there' });
    }

    reply
        .code(200)
        .send({ msg: 'Show added to your favorite shows-list' });
}

module.exports = {
    method: 'POST',
    url: '/add-show',
    schema: {
        body: {
            description: 'JSON schema for request body',
            type: 'object',
            properties: {
                showName: {
                    type: 'string',
                    description: 'Name of the show user wants to add'
                },
                playlistName: {
                    type: 'string',
                    description: 'Name of the playlist to add'
                }
            },
            required: ['showName', 'playlistName']
        },
        response: {
            200: {
                description: 'JSON schema for response status code 200',
                type: 'object',
                properties: {
                    msg: {
                        type: 'string'
                    }
                },
                required: ['msg']
            },
            201: {
                description: 'JSON schema for response status code 201',
                type: 'object',
                properties: {
                    msg: {
                        type: 'string'
                    }
                },
                required: ['msg']
            }
        }
    },
    handler: addShow
}