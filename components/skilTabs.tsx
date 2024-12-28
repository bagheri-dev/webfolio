const SkilTabs = () => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {/* Tab 1 */}
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-primary-color text-lg font-semibold bg-gray-normal hover:bg-primary-color hover:text-white transition-all duration-300"
                aria-label="NextJS"
            />
            <div
                role="tabpanel"
                className="tab-content bg-gray-normal dark:bg-zinc-700 border border-secondary-color rounded-lg p-6 shadow-lg"
            >
                <div className="text-primary-color dark:text-gray-normal px-4">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box">App router</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box"> Component hierarchy and file conventions</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Rendering strategies (SSR, ISR, CSR, SSG)</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Caching, Performance, and Optimization
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">API routes, server actions and mutation
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Component hierarchy and file conventions
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Server components and Suspense
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tab 2 */}
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-primary-color text-lg font-semibold bg-gray-normal hover:bg-primary-color hover:text-white transition-all duration-300"
                aria-label="React & Libraries"
                defaultChecked
            />
            <div
                role="tabpanel"
                className="tab-content bg-gray-normal dark:bg-zinc-700 border border-secondary-color rounded-lg p-6 shadow-lg"
            >
                <div className="text-primary-color dark:text-gray-normal">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-end timeline-box">JSX and functional components
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box"> Components architecture
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Atomic design pattern
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Lifecycle and reconciles

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">React design patterns

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Hooks pettern

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">State management by context, reducer and redux , zustand
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Redux toolkit

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">React router

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">React hook form and zod resolver

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Tanstack react query

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">React component libraries like Material UI and Headless UI

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">JSS, styled-components, CSS modules

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">React vite
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tab 3 */}
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-primary-color text-lg font-semibold bg-gray-normal hover:bg-primary-color hover:text-white transition-all duration-300"
                aria-label="TypeScript & JavaScript"
            />
            <div
                role="tabpanel"
                className="tab-content bg-gray-normal dark:bg-zinc-700 border border-secondary-color rounded-lg p-6 shadow-lg"
            >
                <div className="text-primary-color dark:text-gray-normal">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box">Classes, interfaces, generics, inheritance and polymorphism</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Functional programming paradigm</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Strongly typed programming</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">DOM and DOM manipulation
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box"> Async functions within promises and callbacks
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Vite JS SPA
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Client side rendering
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Exception handling
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Axios and fetching APIs
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Events, forms and dates
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tab 4 */}
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-primary-color text-lg font-semibold bg-gray-normal hover:bg-primary-color hover:text-white transition-all duration-300"
                aria-label="Network"
            />
            <div
                role="tabpanel"
                className="tab-content bg-gray-normal dark:bg-zinc-700 border border-secondary-color rounded-lg p-6 shadow-lg"
            >
                <div className="text-primary-color dark:text-gray-normal">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box">Authorizations strategies like JWT and cookies</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">REST API & Json</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Axios and fetch APIs</div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tab 5 */}
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-primary-color text-lg font-semibold bg-gray-normal hover:bg-primary-color hover:text-white transition-all duration-300"
                aria-label="HTML & CSS"
            />
            <div
                role="tabpanel"
                className="tab-content bg-gray-normal dark:bg-zinc-700 border border-secondary-color rounded-lg p-6 shadow-lg"
            >
                <div className="text-primary-color dark:text-gray-normal">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-end timeline-box">HTML5 and CSS3</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Tailwind</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">RWD (Responsive Web Design)</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Media Queries</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box"> Flex and grid systems</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Animations</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Semantic tags</div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Tab 6 */}
            <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-primary-color text-lg font-semibold bg-gray-normal hover:bg-primary-color hover:text-white transition-all duration-300"
                aria-label="Tools"
            />
            <div
                role="tabpanel"
                className="tab-content bg-gray-normal dark:bg-zinc-700 border border-secondary-color rounded-lg p-6 shadow-lg"
            >
                <div className="text-primary-color dark:text-gray-normal">
                <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-end timeline-box">Node.js</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Node packages managers</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Git, Gitflow</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">Figma</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end timeline-box">Trello</div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkilTabs;
