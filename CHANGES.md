CHANGES
=======
### Changes on 26-ago-2014

* /submit_order
    - Added itemPrice (numeric) at the line level and currency (string) at the header level.
    - Removed shippingMethod from response message

### Changes on 19-ago-2014

* GET, PUT /shopping_cart
    - Specification updated with shippingCondition

* /submit_order
    - Specification updated with shippingCondition

### Changes on 14-ago-2014

* /scheduled_items
    - Specification updated with shippingCondition field.

* /sold_to/ship_tos
    - Added shipTos structure. Mock updated accordingly.

### Changes on 11-ago-2014

* /products
    - Specification updated with productDivision field.

### Changes on 06-ago-2014

* POST, PUT /shopping_cart
    - Specification updated with length, grade, plant fields. Mock Updated accordingly.

### Changes on 04-ago-2014

* /sold_to/ship_tos
    - Change structure to old one

* /sold_to/ship_tos, /sold_to/ship_tos/ship_to_id
    - Update shippingMethod field to array of strings

* PUT /shopping_cart
    - Update of specification: new field added: shipping_condition

* /statements
    - Mock updated with Account Summary data.
    New scenarios - 3 currencies - as of date: 06/10/2014, 04/09/2014, 04/11/2014, 03/09/2014, 03/10/2014, 03/11/2014
    New scenarios - 2 currencies - as of date: 05/09/2014, 05/10/2014, 05/11/2014, 06/09/2014, 06/11/2014
    New scenarios - 1 currencies - as of date: 04/10/2014

### Changes on 01-ago-2014

* /scheduled_items, /order_items
	- Structures updated as IDC observations

### Changes on 31-jul-2014

* /scheduled_items
    - Updated shipto structure. Mock updated accordingly.

* /sold_to/ship_tos
    - Added shipTos structure. Mock updated accordingly.

* /order_items
    - Changed shipto structure. Mock updated accordingly.


### Changes on 27-jul-2014
     /shipment_document
     	-Mock updated

     /schuedueld_items
	-Mock updated (scenario: P.O.=1)

### Changes on 18-jul-2014

* /saved_searches
    - gridConfig field was removed from structure. Mock updated accordingly.

* /statements
    - Mock scenarios updated due to format validate defined (Valid scenarios: 03/09/2014, 03/10/2014, 03/11/2014, 04/09/2014, 04/10/2014, 04/11/2014, 05/09/2014, 04/10/2014, 04/11/2014, 06/09/2014, 06/10/2014, 06/11/2014)


### Changes on 17-jul-2014

* /statements
    - Fix: Added missing fields urlInvoiceDebits and urlCreditsMemo in structure Debit and Credit respectively.  Mock updated accordingly.
    - Data added on mock (Valid scenarios: 2014-09-03, 2014-10-03, 2014-11-03, 2014-09-04, 2014-10-04, 2014-11-04, 2014-09-05, 2014-10-05, 2014-11-05, 2014-09-06, 2014-10-06, 2014-11-06)


### Changes on 15-jul-2014

* /shopping_cart
    - preferredQuantity field on RoundedError structure updated with lowercase data (up, down)

### Changes on 14-jul-2014

* /profile/dateFmt
    - New service. Mock created accordingly.

### Changes on 11-jul-2014

* /products
    - Fix on the mock. Body request contains field shapesSizesIds.

### Changes on 10-jul-2014

* /order_items
    - cwtPrice field updated to String type
    - Mock updated accordingly

### Changes on 08-jul-2014

* /scheduled_items
    - Mock updated with shape groups, plant and ship to filters

* /railcar_tracking
    - Railcar structure updated.
    - Mock updated accordingly. (valid scenarios - shippedDate: 2014-10-05 or 2014-05-05; bolNumber: 1 or 2; vehicleNumber: 1 or 2)

* /ship_tos
    -Mock fixed.

* /submit_order
    - Structure fixed (one character starting in UpperCase)
    - Mock fixed

* /saved_searches
    - bug fixes on the code that didn't change any service behavior.

* /shape_groups, /shopping_cart, /submit_order, /products, /order_items
    - sold to id


### Changes on 07-jul-2014

* /emails
    - Mock fixed

* /scheduled_items
    - Heat structure created
    - Init and end dates not mandatory
    - Mock updated

* /ship_tos
    - Mock updated to shipTos

* /shopping_cart
    - Items from ShoppingCartNewItem model corrected

* /statements
    - Mock updated (asOfDate: 2014-10-04, 2014-10-06)
    - Mock fixed

### Changes on 03-jul-2014

* all services
    - Added HTTP code 401 and 500.

* /emails
    - Request updated

* /downloads
    - Mock updated

* /scheduled_items
    - heatNumber updated to array of strings

* /shopping_cart
    - Mock fixed

* /statements
    - originalAmount field from Credit structure removed.
    - Mock updated

* /submit_order
    - Mock fixed

### Changes on 02-jul-2014

* /products
    - request changed to be compliant with terms used for the parameters like on version 1.13
    - quantity was removed from the response

* /order_items
    - orderQuantityUOM and shippedQuantityUOM changed to string instead of number

* /authorizations
    - Added HTTP code 400.
    - Mock updated.

* /contacts
    - Added HTTP code 400.

*/downloads
    - Added HTTP code 400.
    - Added response structure

* /emails
    - Added HTTP code 400.

* /family_sizes
    - Added HTTP code 400.

* /keep_alive
    - Added HTTP code 400.

* /order_items
    - Added HTTP code 400.
    - Mock updated (Error scenario changed to 400)

* /railcar_tracking
    - Added HTTP code 400.
    - Mock updated (Error scenario changed to 400)

* /saved_searches
    - Added HTTP code 400.

* /scheduled_items
    - Added HTTP code 400.
    - Mock updated (Error scenario changed to 400)

* /shape_groups
    - Added HTTP code 400.

* /shipment_documents
    - Added HTTP code 400.
    - Mock updated (Error scenario changed to 400)

* GET /shopping_cart
    - Added HTTP code 400.
    - shoppingCartItemsDesc changed from array to a simple object

* POST PUT /shopping_cart
    - Mock updated (Error scenario changed to 400)
    - poNumber and requestedDeliveryDate removed from the request message (only for the POST method)

* /sold_to, /ship_tos, /ship_to
    - Added HTTP code 400.
    - Mock updated (Error scenario changed to 400)

* /statements
    - Added HTTP code 400.
    - Mock updated (Error scenario changed to 400)

* /submit_order
    - Added HTTP code 400.
    - Mock updated (Error scenario changed to 400)

### Changes on 01-jul-2014

* /railcar_tracking
	- There are no need to have /scheduled_items/{scheduled_item_id}/railcar_tracking once there are no more need to send the scheduled_item_id, so was aligned during the daily-calls that this service would change to /railcar_tracking
	- Removed shipTo, plant and forwarding agent from the response. This information should be get from /scheduled_items
	- The model ShipToDescription has changed to include the railcarDescription (a very short description to the SoldTo)

* /scheduled_items
	- Filters has 3 arrays, size, length and grade (i.e.: size = [], length = [], and grade = [])
	- To check data available to search, check scheduledItemsData.js in the var scheduledItems

* /sold_to, /sold_to/ship_tos, /sold_to/ship_tos/{ship_to_id}
	- Checked

* /statements
	- asOfDate changed to a query parameter instead of body

* POST /shopping_cart
    - Added body parameter (array of ShoppingCartNewItem) in request, this is needed to insert the selected data of products at Shopping Cart from View Products.

* /shopping_cart
    - Specification checked.
    - Included scenario to check (Scenario to simulate RoundErrorItems - valid itemQuantity = 1230)

* /shipment_documents
    - Specification checked.
    - Included scenario to check (downloadHeat, downloadBol and/or downloadInvoice: true; valid invoiceNumbers: 1, 2, or 3; valid poNumbers: 1, 2, or 3; valid soNumbers: 1, 2, or 3; valid heatNumbers: 1, 2, or 3; valid bolNumbers: 1, 2, or 3; valid vehicleNumbers: 1, 2, or 3; valid shipmentNumber: 1, 2, or 3)

* /products
    - Specification updated. Filter is an object which contains an array of length, and an array of grade.

* /scheduled_items
    - Specification updated.
        - Filter is an object which contains an array of size, an array of length, and an array of grade.
        - ShipTo model updated to include railCarDescription
        - New Plant model to include railCarDescription

* /downloads
    - Specification updated.
        - In request, docID is query.
        - path: /downloads

* /saved_searches
    - Included a field name in the model to receive the name specified by the user and desc field should be automatically generated by the UI based on the search criteria.

### Changes on 30-jun-2014

* /products
    - Specification checked and the mock updated to provide correct response. Product structure updated with Filters and fields starting with lowercase.
    - Included scenario to check (valid skuIds starting in number 1; valid sizeCodesIds: 1, 2, 3, or 4; valid shapeGroupIds: 1, 2, or 3; valid plantIds: 1, 2, or 3; valid familySizeIds: 1, 2, 3, or 4)

* /shape_group
    - Specification checked and the mock updated to provide correct response.

* Swagger UI
    - The HTML files which supports the user interface with the swagger spec was updated to the latest version (no impact on the specifications)

### Changes on 27-jun-2014

* /order_items
    - Specification checked and the mock updated to provide correct response.

* /family_sizes, /plants, /downloads
    - bug fixes on the code that didn't change any service behavior.

### Changes on 26-jun-2014

* /authorizations
    - Error response updated. Included scenario to check page_id (valid page_id viewOrders, viewProducts, view Statements, viewShipments)

* /downloads
    - Specification checked. Included scenario to check docID (valid docID 1, 2, 3, 4)

* /keepAlive
    - Specification checked.

* /plants
    - Specification checked. Mock responses corrected. (valid shapeGroupIds: 1, 2, or 3)

* GET /saved_searches
    - Response model adjusted to have a place to store the grid configuration (new field: gridConfig which should be used to store the grid configuration json as it is)
    - saved search type enum updated to PRD, ORD, SHI instead of products, orders and shipments

* POST /saved_searches
    - Nothing is returned besides the empty json.
    - Model to do POST and PUT: removed the id, it is automatically generated, so it is just part of the response in GET and not in during the saving.

### Changes from eGerdau_API latest version

* /authorizations
Specification checked to avoid version conflicts and mock responses also checked, no error scenario (valid page_ids "viewProducts viewShipments viewStatements viewOrders")

* /contacts
Specification checked. Mock responses corrected.

* /emails
Specification checked. Mock responses corrected. Included scenario to check cache_id (valid cache_ids 1 or 2)

* /family_sizes
Specification checked. Mock responses corrected. (valid plantIds 1 and 2, valid shapeGroupIds 1 and 2)
