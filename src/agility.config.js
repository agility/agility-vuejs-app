//Our Agility Modules
import RichTextArea from './components/modules/RichTextArea'
import PostsListing from './components/modules/PostListing'
import PostDetails from './components/modules/PostDetails'
import Jumbotron from './components/modules/Jumbotron'

//Our Agility PageTemplates
import OneColumnTemplate from './components/templates/OneColumnTemplate'

export default {
    guid: 'e28e3b0b', //Set your guid here
    fetchAPIKey: 'defaultlive.2624fb4848ee6afe0b11450addf37e7773712e2a395cf1ba63face999525529a', //Set your fetch apikey here
    previewAPIKey: 'defaultpreview.d225843e256629560e2a0d0e374f51097bcab0f31ce49fd763ebb5a3cf2f115d', //set your preview apikey
    languageCode: 'en-us',
    channelName: 'website',
    isPreview: false,
    caching: {
        maxAge: 0
    },
    moduleComponents: {
        RichTextArea,
        PostsListing,
        Jumbotron,
        PostDetails
    },
    pageTemplateComponents: {
        OneColumnTemplate
    }
}