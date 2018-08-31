Feature: browser
  Scenario:001 SearchBaidu
    Given I go to 'http://www.baidu.com'
    When I input 'test' in searchbox
    Then I click button search
    Then I show see results more than 100
