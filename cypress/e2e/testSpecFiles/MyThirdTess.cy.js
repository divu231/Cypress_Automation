describe("",()=>{
    it("api",()=>{
        cy.request('GET','https://gorest.co.in/public/v2/posts').then(resposne=>{
            expect(resposne.status).to.eql(200)
            expect(resposne.body.id).to.not.be.null
            expect(resposne.body[0]).to.have.property("user_id",7908902)
        })
    })

    it("api POST",()=>{

        cy.request({
            method: 'POST',
            url: `https://gorest.co.in/public/v2/users`,
            headers: {
                Authorization: 'Bearer 670469c31b9a3f8e81678877b697bdf3e8b6732c3bee2951fa9f887af7489e68'
            },
            body:{
            "name":"testdpi7","email":"testdp7@tromp.example","gender":"female","status":"active"
            }
         
        }).then(response =>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response))
        })
    })

    it("api delete",()=>{
        const userid = 7910229
        cy.request('DELETE',`https://gorest.co.in/public/v2/users/${userid}`).then(response =>{
            expect(response.status).to.eq(204)
            
        })
    })


})