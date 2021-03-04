var apiKey = 'cfce403575d68db6251dc4c7c3f816e2';
Weather.setApiKey( apiKey );
var tempApiKey = Weather.getApiKey();

Weather.getCurrent( 'Wyckoff', function( current ) {
    console.log(
        [ 'Currently:', current.temperature(), 'and', current.conditions() ].join( ' ' );
    );
} );

