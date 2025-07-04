'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">notifications documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' :
                                            'id="xs-controllers-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' :
                                        'id="xs-injectables-links-module-AppModule-0d9ba7d913e5631b866ecb1a493ce0d597548cdf2ae849fffadf6e6b8955cc1aa1014fad7610f50b9a44a1ce9127c0547e1f0b47caf959b82d32fd3bf867fb52"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DomainModule.html" data-type="entity-link" >DomainModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DomainModule-fe06c7c875f2b81c9195144f2789bbf7a0b3f086cc14eda0c4cca3b32a54a129ea99666b4b36c84e47b62bedb7515cb190180c6af4c31b8707a41d04444c4cc8"' : 'data-bs-target="#xs-injectables-links-module-DomainModule-fe06c7c875f2b81c9195144f2789bbf7a0b3f086cc14eda0c4cca3b32a54a129ea99666b4b36c84e47b62bedb7515cb190180c6af4c31b8707a41d04444c4cc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DomainModule-fe06c7c875f2b81c9195144f2789bbf7a0b3f086cc14eda0c4cca3b32a54a129ea99666b4b36c84e47b62bedb7515cb190180c6af4c31b8707a41d04444c4cc8"' :
                                        'id="xs-injectables-links-module-DomainModule-fe06c7c875f2b81c9195144f2789bbf7a0b3f086cc14eda0c4cca3b32a54a129ea99666b4b36c84e47b62bedb7515cb190180c6af4c31b8707a41d04444c4cc8"' }>
                                        <li class="link">
                                            <a href="injectables/DomainService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DomainService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractMessage.html" data-type="entity-link" >AbstractMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailMessageSender.html" data-type="entity-link" >EmailMessageSender</a>
                            </li>
                            <li class="link">
                                <a href="classes/LongMessage.html" data-type="entity-link" >LongMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShortMessage.html" data-type="entity-link" >ShortMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/SmsMessageSender.html" data-type="entity-link" >SmsMessageSender</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DomainService.html" data-type="entity-link" >DomainService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IMessageSender.html" data-type="entity-link" >IMessageSender</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMessageSender-1.html" data-type="entity-link" >IMessageSender</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});