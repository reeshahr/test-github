# Requirements 
- yarn
- node >= 14

# Setup
- yarn install

# Build image
docker build . --tag=regilex-forest

### Note:
to generate the initial project we run ( you dont need to do this)
```
lumber generate "regilex-admin" --connection-url "mongodb://localhost:27017/regilex" --ssl "false" --application-host "localhost" --application-port "3310" --email "regilex@keyspecs.com" --token "eyJraWQiOiJ6d0VjbU5LVVpVTkdYUnlNRzZ2QUoyTTVfYzBoZGhfblBXS0hYWjhGUTFBIiwiYWxnIjoiUlMyNTYifQ.eyJkYXRhIjp7ImRhdGEiOnsidHlwZSI6InVzZXJzIiwiaWQiOiI1MTkyNyIsImF0dHJpYnV0ZXMiOnsiZmlyc3RfbmFtZSI6IlJlZ2lsZXgiLCJsYXN0X25hbWUiOiJSZWdpbGV4IiwiZW1haWwiOiJyZWdpbGV4QGtleXNwZWNzLmNvbSJ9fX0sImlzQXBwbGljYXRpb25Ub2tlbiI6dHJ1ZSwiYXVkIjoiRk9SRVNUX1VTRVJTIiwiaXNzIjoiRk9SRVNUX0FVVEhFTlRJQ0FUSU9OX1NZU1RFTSIsImlhdCI6MTYyNTI0NDE1NSwiZXhwIjoxNjI1NDE2OTU1fQ.KeFwKx3zSADmDCaUvWvoKLoa2aTvGXmet4ayr66RoylYXkHAm9hrnLrRHTaCejJL4GoSBC24uKmgCfv0r13tkPB38SX5IXR57nzrZck8b-EiTLgafPxEPeBC_qIJ8ivWE6_Os3lEwpB_SjuKB8JDVQkp_FrHS3LbGbhP2orIi-BWhwtE3kK-1LHEFQXP5Rz_tPCeyJR-KAyom9UIrt59YEAicP2Jo-1P3fVnQ3245GwPNJshvLMa_rX_nx2FXkeM1f2D1v6zY_0w0HUd4U_IShBAXJ-Fs3wly4lXqHDDufcwzg_C2KlNxM1p7u0suToKGjGJNcHiinESmioQyD-gYg"
```


## What to do when models change
- `lumber update`
- for more options run `lumber help`