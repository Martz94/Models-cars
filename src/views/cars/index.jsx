import { Layout } from "../../fragments"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, SearchBox, Pagination, ClearRefinements, HitsPerPage, SortBy } from "react-instantsearch-hooks-web"
import { Collapse, CustomCurrentRefinements, CustomRefinementList, CardProduct } from "../../components";

const searchClient = algoliasearch(import.meta.env.VITE_ALGOLIA_APP_ID,import.meta.env.VITE_ALGOLIA_API_KEY);

const Home = () => {
  return (
    <Layout ban={<div className="banner_principal">
      <h2>Cars</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem dolores officia aliquid, modi aliquam enim placeat illo officiis vitae ipsum?</p>
    </div>}>

      <>
        <InstantSearch searchClient={searchClient} indexName={import.meta.env.VITE_ALGOLIA_INDEX}>
          {/* <SearchBox /> */}
          <div className="products">
            <div>
              <h3>Filters</h3>
            </div>
            <div>
              <div>
                Show: &nbsp;
                <HitsPerPage
                  items={[
                    { label: '8 hits per page', value: 9, default: true },
                    { label: '16 hits per page', value: 18 },
                  ]}
                />
              </div>
              <div>
                Sort by: &nbsp;
                <SortBy
                  items={[
                    { label: 'Default', value: 'dev_ECOMMERCE_CARS' },
                    { label: 'Price (asc)', value: 'dev_ECOMMERCE_CARS_price_asc' },
                    { label: 'Price (desc)', value: 'dev_ECOMMERCE_CARS_price_desc' }
                  ]}
                />
              </div>
            </div>
            <div>
              <CustomCurrentRefinements />
              <ClearRefinements
                classNames={{
                  button: 'button_1'
                }}
                translations={{
                  resetButtonText: 'Remove all',
                }}
              />
              <Collapse title="Brand">
                <CustomRefinementList attribute="brand" />
              </Collapse>
              <Collapse title="Model">
                <CustomRefinementList attribute="model" />
              </Collapse>
              <Collapse title="Color">
                <CustomRefinementList attribute="color" />
              </Collapse>
            </div>
            <div>
              <Hits hitComponent={CardProduct} />
              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </>
    </Layout>

  )
}

export default Home