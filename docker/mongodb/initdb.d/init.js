/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-09-05 16:38:40
 * @LastEditTime : 2019-12-30 19:23:27
 * @LastEditors  : 徐长剑
 */

db = db.getSiblingDB('mock')

db.createUser({
  user: 'admin',
  pwd: 'BO4TEuUaFIYM7X0Y',
  roles: [
    {
      role: 'readWrite',
      db: 'mock'
    }
  ]
})
db.createUser({
  user: 'developers',
  pwd: 'NLmH8Z19JDWMiqE8V9bi',
  roles: [
    {
      role: 'read',
      db: 'mock'
    }
  ]
})
