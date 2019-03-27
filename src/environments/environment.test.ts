export const environment = {
    production: false,
    envName: 'test',
    featureEnabled: {
      identityHubEdit: {
        customerInfo: true,
        addNotes: true,
        scheduleWorkOrder: true,
        createExtraService: true
      },
      identityHubSlackMessage: true
    },
    
    //these are for cofiguring the generic form for incident creation
    genericFormFeatures: {
      schedulingIncident: true,
      driverSafetyIncident: true,
      billingIncident: true,
      escalationIncident: true,
      letterIncident: true,
      tmxDotComIncident: true,
      socialMediaIncident: true,
      supportActivitiesGenericForm : true,
      fileUpload: true
    },
  
    appUserProfilesUserStorageLimit: 500,
    recentCustomersDisplayLimit: 10,
    ssAPI: {
      common: {
        endpointPrefix: "https://test.servsmart.io",
        authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkF1ZHBIa0tnS2lhZ3Q2U0pxajdVcjFRX3M5USJ9.eyJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjEzMzcvIiwiaXNzIjoiaHR0cDovL2FkZnMuc2VydmljZW1hc3Rlci5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCIsImlhdCI6MTQ2MzYwNzEyNiwiZXhwIjoxNTI2Njc5MTI2LCJ3aW5hY2NvdW50bmFtZSI6InN2YzNTY2FsZUZTR2Vjb21tIiwiZ3JvdXAiOlsiQklaIFNlcnZpY2UgQWNjb3VudHMiLCJEb21haW4gVXNlcnMiLCJTZXJ2aWNlIEFjY291bnRzIExvZ29uIERlbnkiXSwiYXV0aF90aW1lIjoiMjAxNi0wNS0xOFQyMTozMjowNi4zODZaIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwidmVyIjoiMS4wIiwiYXBwaWQiOiIzc2NhbGVhcGl0b2tlbiJ9.mRZPeJvapHEK70QKMkSakVkg16AKnEzF6Xcx6IVKouJaXYGdHx2o1QWlIGrS_UUpSNuYiDULwGbiNoKQx4oQi3and-LuQALN0mDqigB34wqG90RbNHC5cN-K29X2oAT8bJdKazeELOwO19keExNSfdD_8KZTg0ebgcIYgvjVCvx3zvMEcMfE5Y5mw-9kXznZFTuWRJyjmqRhq19WEB08rCDD_Eg9hRy9b1fn3gNDnhQ-fbbDqfK7z2Nht9RckjNslF0nVLH41a-WNsV6kkNcObl68bfWAffZNG9KAwGBxr7oWwmGyHhR_NGZ8ixCiZxkaUfqhxexupbys46Rp7iIuQ",
        app_key: "zoWpgIIDWjsmgGkeFWNGaeIiLQUhwsBS"
      },
      address:
        {
          endpoint: "/V1/Addresses",
          timeZoneLookup: {
            endpoint: "/V1/Addresses/TimeZoneLookup"
          }
        },
      appointments: {
        endpoint: "/V4/Appointments"
      },
      appUserProfiles: {
        endpoint: "/V1/AppUserProfiles",
        registrations: {
          endpoint: "/V1/AppUserProfiles/Registrations"
        },
        appName: "IdentityHub"
      },
      balances: {
        productSales: {
          endpoint: "/V1/Balances/ProductSales"
        }
      },
      contacts:
        {
          endpoint: "/V3/Contacts"
        },
      identities: {
        endpoint: "/V5/Identities"
      },
      identityDetails: {
        endpoint: "/V1/IdentityDetails"
      },
      invoices: {
        endpoint: "/V1/Invoices"
      },
      locations: {
        endpoint: "/V5/Locations"
      },
      notes: {
        endpoint: "/V3/Notes"
      },
      organizations: {
        endpoint: "/V5/Organizations"
      },
      payments: {
        endpoint: "/V1/Payments"
      },
      paymentMethods: {
        endpoint: "/V1/PaymentMethods"
      },
      preferences: {
        workOrders: {
          endpoint: "/V4/Preferences/WorkOrders"
        }
      },
      products: {
        endpoint: "/V1/Products"
      },
      productSales: {
        endpoint: "/V5/ProductSales"
      },
      search: {
        endpoint: '/V1/Search'
      },
      slack: {
        endpoint: "/v2/slack/relayslackmessage",
        channelName: "identity_hub_test_ops"
      },
      subscriptions: {
        endpoint: "/V1/Subscriptions"
      },
      supportActivity: {
        endpoint: "/V2/SupportActivities"
      },
      surveys: {
        endpoint: "/V1/Surveys"
      },
      tasks: {
        endpoint: "/V2/Tasks"
      },
      workOrders: {
        endpoint: "/V4/WorkOrders"
      }
    },
    graphQL: {
      common: {
        graphiQL: '/V1/Orchestration/api'
      },
      queryByNotes: `query GetNotes($fIdentityID: String!) {
          ProductSale: ProductSalesV5(fIdentityID: $fIdentityID) {
            Data {
              ProductSaleID
              ReferenceNumber
              ProductSaleNotes: _NoteV3_fEntityID {
                Data {
                  NoteID
                  Text
                  User
                  CreatedDateTime
                  NoteTypes {
                    Name
                    Description
                  }
                  RelatedEntities {
                    Name
                    Description
                    EntityID
                  }
                }
                Errors { Description }
              }
              WorkOrders: _WorkOrderV4_fProductSaleID {
                Data {
                  WorkOrderID
                  WorkOrderNotes: _NoteV3_fEntityID {
                    Data {
                      NoteID
                      Text
                      User
                      CreatedDateTime
                      NoteTypes {
                        Name
                        Description
                      }
                      RelatedEntities {
                        Name
                        Description
                        EntityID
                      }
                    }
                    Errors { Description }
                  }
                  Appointments: _AppointmentV4_fRelatedEntities_EntityID {
                    Data {
                      AppointmentID
                      DurationWindows {
                        StartTime
                        EndTime
                      }
                    }
                    Errors { Description }
                  }
                }
              }
            }
            Errors { Description }
          }
        }`,
        queryBySupportActivity: `query GetSupportActivities($fIdentityID: String!) {
          SupportActivity: SupportActivitiesV2(fRelatedEntityID: $fIdentityID) {
            Data {
              CreatedDateTime
              Description
              Status
              ReferenceNumber
              Attributes {
                Name
                Value
              }
              RelatedEntities{
                ID
                Type
              }
              Type
              SubType
              SupportActivityID
              Notes: _NoteV3_fEntityID {
                Data {
                  NoteID
                  Text
                  User
                  CreatedDateTime
                  NoteTypes {
                    Name
                    Description
                  }
                  RelatedEntities {
                    Name
                    Description
                    EntityID
                  }
                }
                Errors { Description }
              }
            }
            Errors { Description }
          }
        }`
    }
  };
  